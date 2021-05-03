import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3471Component } from './test-component3471.component';

describe('TestComponent3471Component', () => {
  let component: TestComponent3471Component;
  let fixture: ComponentFixture<TestComponent3471Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3471Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3471Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
