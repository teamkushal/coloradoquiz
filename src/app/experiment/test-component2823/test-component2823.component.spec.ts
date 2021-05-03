import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2823Component } from './test-component2823.component';

describe('TestComponent2823Component', () => {
  let component: TestComponent2823Component;
  let fixture: ComponentFixture<TestComponent2823Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2823Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2823Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
