import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3703Component } from './test-component3703.component';

describe('TestComponent3703Component', () => {
  let component: TestComponent3703Component;
  let fixture: ComponentFixture<TestComponent3703Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3703Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3703Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
