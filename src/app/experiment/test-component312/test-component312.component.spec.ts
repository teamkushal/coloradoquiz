import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent312Component } from './test-component312.component';

describe('TestComponent312Component', () => {
  let component: TestComponent312Component;
  let fixture: ComponentFixture<TestComponent312Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent312Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent312Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
