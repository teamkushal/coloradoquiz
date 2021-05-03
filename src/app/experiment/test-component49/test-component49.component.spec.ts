import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent49Component } from './test-component49.component';

describe('TestComponent49Component', () => {
  let component: TestComponent49Component;
  let fixture: ComponentFixture<TestComponent49Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent49Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent49Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
