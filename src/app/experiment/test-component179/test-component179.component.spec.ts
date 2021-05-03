import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent179Component } from './test-component179.component';

describe('TestComponent179Component', () => {
  let component: TestComponent179Component;
  let fixture: ComponentFixture<TestComponent179Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent179Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent179Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
