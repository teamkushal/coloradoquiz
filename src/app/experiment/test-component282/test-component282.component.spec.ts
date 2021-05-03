import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent282Component } from './test-component282.component';

describe('TestComponent282Component', () => {
  let component: TestComponent282Component;
  let fixture: ComponentFixture<TestComponent282Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent282Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent282Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
