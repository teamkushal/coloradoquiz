import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2196Component } from './test-component2196.component';

describe('TestComponent2196Component', () => {
  let component: TestComponent2196Component;
  let fixture: ComponentFixture<TestComponent2196Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2196Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2196Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
