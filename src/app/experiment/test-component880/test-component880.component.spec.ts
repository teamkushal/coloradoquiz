import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent880Component } from './test-component880.component';

describe('TestComponent880Component', () => {
  let component: TestComponent880Component;
  let fixture: ComponentFixture<TestComponent880Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent880Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent880Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
