import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2747Component } from './test-component2747.component';

describe('TestComponent2747Component', () => {
  let component: TestComponent2747Component;
  let fixture: ComponentFixture<TestComponent2747Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2747Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2747Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
