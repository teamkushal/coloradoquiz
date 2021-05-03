import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3589Component } from './test-component3589.component';

describe('TestComponent3589Component', () => {
  let component: TestComponent3589Component;
  let fixture: ComponentFixture<TestComponent3589Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3589Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3589Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
