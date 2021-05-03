import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3402Component } from './test-component3402.component';

describe('TestComponent3402Component', () => {
  let component: TestComponent3402Component;
  let fixture: ComponentFixture<TestComponent3402Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3402Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3402Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
