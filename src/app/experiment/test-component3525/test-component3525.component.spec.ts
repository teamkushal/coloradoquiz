import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3525Component } from './test-component3525.component';

describe('TestComponent3525Component', () => {
  let component: TestComponent3525Component;
  let fixture: ComponentFixture<TestComponent3525Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3525Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3525Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
