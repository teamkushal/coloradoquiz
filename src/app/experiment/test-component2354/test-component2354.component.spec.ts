import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2354Component } from './test-component2354.component';

describe('TestComponent2354Component', () => {
  let component: TestComponent2354Component;
  let fixture: ComponentFixture<TestComponent2354Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2354Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2354Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
