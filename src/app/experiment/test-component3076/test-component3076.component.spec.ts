import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3076Component } from './test-component3076.component';

describe('TestComponent3076Component', () => {
  let component: TestComponent3076Component;
  let fixture: ComponentFixture<TestComponent3076Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3076Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3076Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
