import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2062Component } from './test-component2062.component';

describe('TestComponent2062Component', () => {
  let component: TestComponent2062Component;
  let fixture: ComponentFixture<TestComponent2062Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2062Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2062Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
