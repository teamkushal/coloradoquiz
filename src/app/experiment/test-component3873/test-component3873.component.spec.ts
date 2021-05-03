import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3873Component } from './test-component3873.component';

describe('TestComponent3873Component', () => {
  let component: TestComponent3873Component;
  let fixture: ComponentFixture<TestComponent3873Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3873Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3873Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
