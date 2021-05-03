import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2222Component } from './test-component2222.component';

describe('TestComponent2222Component', () => {
  let component: TestComponent2222Component;
  let fixture: ComponentFixture<TestComponent2222Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2222Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2222Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
