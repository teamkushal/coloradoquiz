import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3475Component } from './test-component3475.component';

describe('TestComponent3475Component', () => {
  let component: TestComponent3475Component;
  let fixture: ComponentFixture<TestComponent3475Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3475Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3475Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
