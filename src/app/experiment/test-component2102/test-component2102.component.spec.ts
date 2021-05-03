import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2102Component } from './test-component2102.component';

describe('TestComponent2102Component', () => {
  let component: TestComponent2102Component;
  let fixture: ComponentFixture<TestComponent2102Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2102Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2102Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
