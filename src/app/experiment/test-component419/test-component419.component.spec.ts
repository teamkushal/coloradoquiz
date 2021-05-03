import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent419Component } from './test-component419.component';

describe('TestComponent419Component', () => {
  let component: TestComponent419Component;
  let fixture: ComponentFixture<TestComponent419Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent419Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent419Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
