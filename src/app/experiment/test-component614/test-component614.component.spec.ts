import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent614Component } from './test-component614.component';

describe('TestComponent614Component', () => {
  let component: TestComponent614Component;
  let fixture: ComponentFixture<TestComponent614Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent614Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent614Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
