import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3850Component } from './test-component3850.component';

describe('TestComponent3850Component', () => {
  let component: TestComponent3850Component;
  let fixture: ComponentFixture<TestComponent3850Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3850Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3850Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
