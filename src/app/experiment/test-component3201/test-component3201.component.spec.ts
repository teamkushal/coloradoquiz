import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3201Component } from './test-component3201.component';

describe('TestComponent3201Component', () => {
  let component: TestComponent3201Component;
  let fixture: ComponentFixture<TestComponent3201Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3201Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3201Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
