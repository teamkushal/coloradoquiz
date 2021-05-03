import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3342Component } from './test-component3342.component';

describe('TestComponent3342Component', () => {
  let component: TestComponent3342Component;
  let fixture: ComponentFixture<TestComponent3342Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3342Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3342Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
