import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent339Component } from './test-component339.component';

describe('TestComponent339Component', () => {
  let component: TestComponent339Component;
  let fixture: ComponentFixture<TestComponent339Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent339Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent339Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
