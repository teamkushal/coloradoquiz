import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent23Component } from './test-component23.component';

describe('TestComponent23Component', () => {
  let component: TestComponent23Component;
  let fixture: ComponentFixture<TestComponent23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent23Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
