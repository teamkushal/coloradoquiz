import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent75Component } from './test-component75.component';

describe('TestComponent75Component', () => {
  let component: TestComponent75Component;
  let fixture: ComponentFixture<TestComponent75Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent75Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent75Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
