import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent497Component } from './test-component497.component';

describe('TestComponent497Component', () => {
  let component: TestComponent497Component;
  let fixture: ComponentFixture<TestComponent497Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent497Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent497Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
