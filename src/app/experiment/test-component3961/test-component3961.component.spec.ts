import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3961Component } from './test-component3961.component';

describe('TestComponent3961Component', () => {
  let component: TestComponent3961Component;
  let fixture: ComponentFixture<TestComponent3961Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3961Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3961Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
