import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2905Component } from './test-component2905.component';

describe('TestComponent2905Component', () => {
  let component: TestComponent2905Component;
  let fixture: ComponentFixture<TestComponent2905Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2905Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2905Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
