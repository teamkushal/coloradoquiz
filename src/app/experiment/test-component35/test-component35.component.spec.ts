import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent35Component } from './test-component35.component';

describe('TestComponent35Component', () => {
  let component: TestComponent35Component;
  let fixture: ComponentFixture<TestComponent35Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent35Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
