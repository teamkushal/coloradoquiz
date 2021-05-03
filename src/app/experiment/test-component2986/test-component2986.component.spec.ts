import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2986Component } from './test-component2986.component';

describe('TestComponent2986Component', () => {
  let component: TestComponent2986Component;
  let fixture: ComponentFixture<TestComponent2986Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2986Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2986Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
