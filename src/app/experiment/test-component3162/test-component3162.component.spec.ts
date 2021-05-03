import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3162Component } from './test-component3162.component';

describe('TestComponent3162Component', () => {
  let component: TestComponent3162Component;
  let fixture: ComponentFixture<TestComponent3162Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3162Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3162Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
