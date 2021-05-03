import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent749Component } from './test-component749.component';

describe('TestComponent749Component', () => {
  let component: TestComponent749Component;
  let fixture: ComponentFixture<TestComponent749Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent749Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent749Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
