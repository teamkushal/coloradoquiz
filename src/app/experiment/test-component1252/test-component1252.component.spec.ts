import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1252Component } from './test-component1252.component';

describe('TestComponent1252Component', () => {
  let component: TestComponent1252Component;
  let fixture: ComponentFixture<TestComponent1252Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1252Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1252Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
