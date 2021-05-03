import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent556Component } from './test-component556.component';

describe('TestComponent556Component', () => {
  let component: TestComponent556Component;
  let fixture: ComponentFixture<TestComponent556Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent556Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent556Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
