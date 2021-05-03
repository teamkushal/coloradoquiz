import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3259Component } from './test-component3259.component';

describe('TestComponent3259Component', () => {
  let component: TestComponent3259Component;
  let fixture: ComponentFixture<TestComponent3259Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3259Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3259Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
