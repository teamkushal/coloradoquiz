import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3518Component } from './test-component3518.component';

describe('TestComponent3518Component', () => {
  let component: TestComponent3518Component;
  let fixture: ComponentFixture<TestComponent3518Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3518Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3518Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
