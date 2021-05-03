import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3654Component } from './test-component3654.component';

describe('TestComponent3654Component', () => {
  let component: TestComponent3654Component;
  let fixture: ComponentFixture<TestComponent3654Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3654Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3654Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
