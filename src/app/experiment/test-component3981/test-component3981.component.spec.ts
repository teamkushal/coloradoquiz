import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3981Component } from './test-component3981.component';

describe('TestComponent3981Component', () => {
  let component: TestComponent3981Component;
  let fixture: ComponentFixture<TestComponent3981Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3981Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3981Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
