import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent52Component } from './test-component52.component';

describe('TestComponent52Component', () => {
  let component: TestComponent52Component;
  let fixture: ComponentFixture<TestComponent52Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent52Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent52Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
