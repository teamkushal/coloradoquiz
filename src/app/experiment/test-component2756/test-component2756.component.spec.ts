import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2756Component } from './test-component2756.component';

describe('TestComponent2756Component', () => {
  let component: TestComponent2756Component;
  let fixture: ComponentFixture<TestComponent2756Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2756Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2756Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
