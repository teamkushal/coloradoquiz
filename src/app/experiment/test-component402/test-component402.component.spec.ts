import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent402Component } from './test-component402.component';

describe('TestComponent402Component', () => {
  let component: TestComponent402Component;
  let fixture: ComponentFixture<TestComponent402Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent402Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent402Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
