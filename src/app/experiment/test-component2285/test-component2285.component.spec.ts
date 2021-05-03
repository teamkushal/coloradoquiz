import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2285Component } from './test-component2285.component';

describe('TestComponent2285Component', () => {
  let component: TestComponent2285Component;
  let fixture: ComponentFixture<TestComponent2285Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2285Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2285Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
