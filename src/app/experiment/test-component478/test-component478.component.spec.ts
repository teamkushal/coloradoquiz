import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent478Component } from './test-component478.component';

describe('TestComponent478Component', () => {
  let component: TestComponent478Component;
  let fixture: ComponentFixture<TestComponent478Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent478Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent478Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
