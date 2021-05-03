import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3404Component } from './test-component3404.component';

describe('TestComponent3404Component', () => {
  let component: TestComponent3404Component;
  let fixture: ComponentFixture<TestComponent3404Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3404Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
