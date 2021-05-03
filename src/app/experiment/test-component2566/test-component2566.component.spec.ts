import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2566Component } from './test-component2566.component';

describe('TestComponent2566Component', () => {
  let component: TestComponent2566Component;
  let fixture: ComponentFixture<TestComponent2566Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2566Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2566Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
