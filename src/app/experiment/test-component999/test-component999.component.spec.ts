import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent999Component } from './test-component999.component';

describe('TestComponent999Component', () => {
  let component: TestComponent999Component;
  let fixture: ComponentFixture<TestComponent999Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent999Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent999Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
