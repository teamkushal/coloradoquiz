import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent375Component } from './test-component375.component';

describe('TestComponent375Component', () => {
  let component: TestComponent375Component;
  let fixture: ComponentFixture<TestComponent375Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent375Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent375Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
