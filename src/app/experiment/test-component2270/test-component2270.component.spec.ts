import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2270Component } from './test-component2270.component';

describe('TestComponent2270Component', () => {
  let component: TestComponent2270Component;
  let fixture: ComponentFixture<TestComponent2270Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2270Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2270Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
