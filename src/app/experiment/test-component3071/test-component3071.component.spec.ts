import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3071Component } from './test-component3071.component';

describe('TestComponent3071Component', () => {
  let component: TestComponent3071Component;
  let fixture: ComponentFixture<TestComponent3071Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3071Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3071Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
