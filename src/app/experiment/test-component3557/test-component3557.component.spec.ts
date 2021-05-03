import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3557Component } from './test-component3557.component';

describe('TestComponent3557Component', () => {
  let component: TestComponent3557Component;
  let fixture: ComponentFixture<TestComponent3557Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3557Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3557Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
