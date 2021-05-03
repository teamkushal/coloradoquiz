import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3625Component } from './test-component3625.component';

describe('TestComponent3625Component', () => {
  let component: TestComponent3625Component;
  let fixture: ComponentFixture<TestComponent3625Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3625Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3625Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
